let hamster = {
    stomach: [],
  
    eat(food) {
      // присвоение значения this.stomach вместо вызова this.stomach.push
      this.stomach = [food];
    }
  };
  
  let speedy = {
     __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Шустрый хомяк нашёл еду
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // Живот ленивого хомяка пуст
  console.log( lazy.stomach ); // <ничего>