

const Validations = (newDog) =>{

    let errors = {};
    const imageRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;
    
    if (newDog.name.length === 0) {
      errors.name = "The Dog should have a name";
    }
    if (newDog.height.length === 0) {
      errors.height = "The form should have a height";
    }
    if (
      newDog.minheight !== "" &&
      newDog.maxheight !== "" &&
      parseInt(newDog.minheight) >= parseInt(newDog.maxheight)
    ) {
      errors.height = "Max height should be greater than min height";
    }
    if (!newDog.weight.metric) {
      errors.weight = "The form should have a weight";
    }
    if (
      newDog.minweight !== "" &&
      newDog.maxweight !== "" &&
      parseInt(newDog.minweight) >= parseInt(newDog.maxweight)
    ) {
      errors.weight = "Max weight should be greater than min weight";
    }
    if (newDog.life_span.length === 0) {
      errors.life_span = "The form should have a life span";
    }
    if (
      newDog.minlife_span !== "" &&
      newDog.maxlife_span !== "" &&
      parseInt(newDog.minlife_span) >= parseInt(newDog.maxlife_span)
    ) {
      errors.life_span = "Max life span should be greater than min life span";
    }
    if (!imageRegex.test(newDog.image)) {
      errors.image = "It should be an image format";
    }
    if (newDog.temperament.length === 0) {
      errors.temperament = "It should have at least 1 temperament";
    }
    return errors;

}

export default Validations