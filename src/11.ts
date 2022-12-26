// Classes

interface IVehicle {
  readonly model: string;
  readonly year: number;
  license?: string;

  getModel(): string;

  getYear(): number;

  getColor(): string;

  setColor(color: string): void;
}

class Vehicle implements IVehicle {
  readonly model: string;
  readonly year: number;
  public license?: string;
  private color: string;

  constructor(model: string, year: number, color: string) {
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }
}

let myVehicle = new Vehicle("Toyota", 1992, "black");
myVehicle.license = "กท 9999";

console.log("myVehicle : type = ", typeof myVehicle);
console.log("myVehicle : value = ", myVehicle);

interface IAuthentication {
  login(): void;

  logout(): void;

  isLoggedIn(): boolean;

  getUserName(): string;
}

class Authentication implements IAuthentication {
  public login(): void {
    console.log("Authentication.login");
  }

  public logout(): void {
    console.log("Authentication.logout");
  }

  public isLoggedIn(): boolean {
    console.log("Authentication.isLoggedIn");
    return true;
  }

  public getUserName(): string {
    console.log("Authentication.getUserName");
    return "test";
  }
}

class AuthenticationBasic extends Authentication {
  public override login(): void {
    console.log("AuthenticationBasic.login");
  }
}

let authentication = new AuthenticationBasic();

authentication.login();
authentication.getUserName();

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }

  public override toString(): string {
    return `Rectangle[area=${this.getArea()}]`;
  }

  //   error !!
  //   public override toStrings(): string {
  //     return `Rectangle[area=${this.getArea()}]`;
  //   }
}

const myRectangle = new Rectangle(10, 10);

console.log("myRectangle.getArea = ", myRectangle.getArea());

console.log("myRectangle.toString = ", myRectangle.toString());
