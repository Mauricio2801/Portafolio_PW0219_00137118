class Student {
    constructor(carnet, name, lastname,schedule) {
        this._carnet = carnet;
        this._name = name;
        this._lastname = lastname;
        this._schedule = schedule;
    }

    get carnet() { return this._carnet }
    get name() { return this._name }
    get lastname() { return this._lastname }
    get schedule(){return this._schedule}

    // Hacen falta las validaciones antes de la asignación
    set carnet(carnet) { this._carnet = carnet }
    set name(name) { this._name = name }
    set lastname(lastname) { this._lastname = lastname }
    set schedule(schedule){this._schedule = schedule}

}

export default Student;