class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구입하였습니다.`);
  }
}

const book1 = new BookC("자료 구조", 15000);
book1.buy();

class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }
  buyTextbook() {
    console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextbookC("인공지능", 5000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();
