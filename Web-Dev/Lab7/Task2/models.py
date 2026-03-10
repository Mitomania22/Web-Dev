class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "Some generic animal sound"

    def info(self):
        return f"{self.name} is a {self.age} year old {self.species}"

    def __str__(self):
        return f"Animal(Name: {self.name}, Age: {self.age}, Species: {self.species})"

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def fetch(self):
        return f"{self.name} is fetching the ball!"

    def speak(self):
        return f"{self.name} says: Woof!"

class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def climb(self):
        return f"{self.name} is climbing a tree!"

    def speak(self):
        return f"{self.name} says: Meow!"