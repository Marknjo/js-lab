import './leaflet';

/**
 * Creates a separator markers with a title on the console
 * @param {String} title
 * @param {Number} separatorLen
 */
const consoleSeparator = (title = './END', separatorLen = 20) => {
  console.log('\n\n');
  console.log(
    `${'-'.repeat(separatorLen)}     ${title}      ${'-'.repeat(separatorLen)}`
  );
  console.log('\n');
};

//////////////////////////////////////////////
//                                          //
//             MAPTY APP PROJECT            //
//                                          //
//////////////////////////////////////////////

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');

const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//////////////////////////////////////////////
//                                          //
//            Geolocation API               //
//                                          //
//////////////////////////////////////////////
//

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lngt]
    this.distance = distance; // in KM
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;

    this.calcPace();
  }

  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;

    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    //min/km
    this.speed = this.duration / (this.distance / 60);

    return this.speed;
  }
}

// const run = new Running([39, -12], 5.2, 24, 178);
// const cycling = new Cycling([39, -12], 5.2, 24, 178);

// console.log(run, cycling);

//////////////////////////////////////////////
//                                          //
//         APPLICATION ARCHITECTURE         //
//                                          //
//////////////////////////////////////////////
//

class App {
  //private
  #map;
  #mapEvent;
  #workout = [];

  constructor() {
    //initialize the app immediately the app loads
    this._getPosition();

    //Listen for form submit event
    form.addEventListener('submit', this._newWorkout.bind(this));

    //Handling the input
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position!');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;

    const coords = [latitude, longitude];

    //Leaflet libray implementation
    //console.log(L.map('map').setView(coords, 13));
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //handling clicks on maps
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapEv) {
    this.#mapEvent = mapEv;
    //render the form on clicking the map
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField(e) {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    //validation

    const validInputs = (...inputs) =>
      inputs.every(input => Number.isFinite(input));

    const allPositive = (...inputs) => inputs.every(input => input > 0);

    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // 1. Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    // 3. If workout == running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //Validate data
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Input has to be positive number');

      //add workout to array
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // 4. If workout == cycling, create running object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      //Validate data
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Input has to be positive number');

      //add workout to array
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // 5. Add new object to workout array
    this.#workout.push(workout);

    // 6. Render workout on map as marker
    // 7. Render workout on list
    // 8. Hide form + clear input fields

    //clear inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
      inputType.value =
        '';

    //display marker
    this._renderWorkoutMarker(workout);
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.distance}`)
      .openPopup();
  }
}

const app = new App();

//Global variables

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
