/**
 * Size verilen javascript dosyasında halihazırda array
 * ve fonksiyon isimleri yer alıyor. Aşağıdaki fonksiyonların
 * içerisine aldığı parametrelere göre comment satırındaki istenileni yapabilecek kod yazmanız bekleniyor.
 */

 const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
]


// move(17,6); // dosyayı klasöre taşıyacak
function move(a, b) {
  let data;
  folders.map((folder) => {
    folder.files?.map((file) => {
      if (file.id === a) {
        data = file;
      }
      folder.files = folder.files.filter((x) => x.id !== a);
    });
  });
  folders.map((folder) => {
    if (folder.id === b) {
      folder.files.push(data);
    }
  });
  folders.map((folder) => {
    console.log(folder);
  });
}

// copy(18,7) // kopyasını oluşturacak
const copy = (file_id, folder_id) => {
  folders.map((folder)=> {
     if(folder.files) {
       const file = folder.files.filter(file => file.id === file_id)
       if(folder.id === folder_id){
         folder.files.push(file)
         console.log(folder);
       }
     }
   })
 }


// remove(17) // dosyayı silecek
function remove(a) {
  folders.map((folder) => {
    folder.files?.map((file, index) => {
      if (file.id === a) {
        folder.files.splice(index, 1);
      }
    });
    console.log(folder);
  });
}


// removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
function removeFolder(a) {
  folders.map((folder) => {
    if (folder.id === a) {
      folder = folders.filter((x) => x.id !== a);
      console.log("hazalFolder", folder);
    }
  });
}


// parentFolderOf(17) // ==> 5
const parentFolderOf = (file_id) => {
  folders.map((folder) => {
    if(folder.files && folder.files.length > 0) {
      folder.files.map((file) => {
        if(file.id === file_id) {
          console.log(file.id);
        }
      })
    }
  })
}

 



move(17,6); // dosyayı klasöre taşıyacak
copy(18,7) // kopyasını oluşturacak
remove(17) // dosyayı silecek
removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
parentFolderOf(17) // ==> 5