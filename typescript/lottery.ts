function lottery(num: number): Promise<string> {
    //code
    return new Promise((resolve, reject) => {
      console.log("Undian lotre dimulai...");
      console.log("Sedang mengundi nomor Anda...");
  
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
  
        if (num === randomNumber) {
          resolve("Selamat, Anda mendapatkan hadiah utama berupa mobil!");
        } else {
          reject("Maaf, Anda kurang beruntung.");
        }
      }, 10000);
    });
  }
  
  //result
  lottery(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Undian lotre telah berakhir..."));
  