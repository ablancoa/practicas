class Person {
  constructor(
    rut,
    gender,
    name,
    bornDate,
    phone,
    email,
    socialNetwork,
    frecuency = "Nunca ha asistido"
  ) {
    this.rut = rut;
    this.gender = gender;
    this.name = name;
    this.bornDate = bornDate;
    this.phone = phone;
    this.email = email;
    this.socialNetwork = socialNetwork;
    this.frecuency = frecuency;
  }

  updateFrecuency(newFrecuency) {
    this.frecuency = newFrecuency;
  }

  updateSocilaNetwork(newSocialNetwork) {
    this.socialNetwork = newSocialNetwork;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

module.exports = Person;
