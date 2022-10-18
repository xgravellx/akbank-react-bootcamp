/** 
 * Size verilen iki adet array’den
 * uygun methodları kullanarak yeni
 * bir object oluşturmanız gerekiyor.
 * Ve bu obje key-value şeklinde 
 * doğru eşleştirme yapılarak
 * oluşturulmalı. 
 */


 const input = {
    "cols": ["Name Surname", "Company", "Email", "Date", "Country", "City"],
    "data": [
        ["Hyacinth Vincent", "Duis Corporation", "iaculis.enim@magnaCrasconvallis.ca", "28/06/2022", "Eritrea", "Lyubertsy"],
        ["Brenden Martinez", "Volutpat Nunc Associates", "iaculis@estMauris.org", "24/03/2021", "British Indian Ocean Territory", "Colwood"]]
}

const sampleoutput = [
    {
        "Name Surname": "Hyacinth Vincent",
        "Company": "Duis Corporation",
        "Email": "iaculis.enim@magnaCrasconvallis.ca",
        "Date": "28/06/2022",
        "Country": "Eritrea",
        "City": "Lyubertsy"
    },
    {
        "Name Surname": "Brenden Martinez",
        "Company": "olutpat Nunc Associates",
        "Email": "iaculis@estMauris.org",
        "Date": "24/03/2021",
        "Country": "British Indian Ocean Territory",
        "City": "Colwood"
    }
]

const denormalized = (data) => {
    return data.data.map((row) =>
      data.cols.reduce((prev, curr, idx) => {
        if (!prev[curr]) prev[curr] = row[idx];
        return prev;
      }, {})
    );
  };
  
  const result = denormalized(input);
  console.log(result);