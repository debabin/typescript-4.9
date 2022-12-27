// 4.9 version
// unlisted property narrowing with the in operator

// in is guard
interface Fish {
  name: string;
  swim: () => void;
}

interface Bird {
  name: string;
  fly: () => void;
}

type Animal = Fish | Bird;

const getAnimal = (animal: Animal) => {
  if ("fly" in animal) {
    animal.fly();
    return animal;
  }

  return animal;
};

type UnknownAnimal = unknown;

const getUnknownAnimal = (unknownAnimal: UnknownAnimal) => {
  if (
    unknownAnimal &&
    typeof unknownAnimal === "object" &&
    "fly" in unknownAnimal
  ) {
    if (typeof unknownAnimal.fly === "function") unknownAnimal.fly();

    return unknownAnimal;
  }

  return unknownAnimal;
};
