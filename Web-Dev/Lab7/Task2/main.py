from models import Animal, Dog, Cat
def main():
    animal = Animal("Generic", 5, "Unknown")
    dog = Dog("Buddy", 3, "Labrador")
    cat = Cat("Whiskers", 2, "White")
    animals = [animal, dog, cat]
    for a in animals:
        print(a)  
        print(a.info())
        print(a.speak())
        print()
    print(dog.fetch())
    print(cat.climb())
if __name__ == "__main__":
    main()