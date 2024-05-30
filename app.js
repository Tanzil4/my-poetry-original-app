let arr = [
{potery : 'Jane Kis Lehjay Me Us Ne Bola Tha Mene Hasna Hai Tere Marny Par...'},
{potery : 'Gunahgaar Hun Gunahgaron Se Hai Wasta Mera Parhaiz-Garon Se Main Aksar Parhaiz Karti Hun...'},
{potery : 'Kabi Kabar Usay Dekh Lain Kahin Mil Lain Ye Kab Kaha Tha Ko Wo Khush Badan Hamara Ho'},
{potery : 'Hum chore chaly hen mehfil ko yad ayen kabhi to mat roona is dil ko tasali dy lena ghbraye kabhi to mat roona '},
{potery : 'Sab Mere Baghair Mutmayin Hain Mein Sab Ke Baghair Ji Raha Hun'},
{potery : 'SaRe DaRD MujHY SoNp diYe EtNa AitBar Tha MujH Per'},
{potery : 'Chupane se nahi chupta, dikhane se nahi dikhta , Ye atish-e-ishq hai is mein bahana ho nahi sakta..'},
{potery : 'Hamaray Shehr Chalay Aao Sada Barsat Rehti Hai Kabhi Badal Baraste Hain Kabhi Ankhen Barasti Hain..'},
{potery : 'Jo dil k Aaine mein ho wohi hai pyar k Qabil. Wrna Deewar k Qabil to har tasweer hoti hai...'},
{potery : 'Muddat k bad mile to mera naam hi yaad kr lena, kabhi time mle to milne ki fariyad kr lena..'},
{potery : 'Firqa-Bandi Hai Kahin Aur Kahin Zaatein Hain, Kya Zamane Mein Panapne Ki Yehi Baatein hain '},
{potery : 'Mera Humraaz Hai Har Rang Ka Mausam Lekin. / Sham-e-Afsurdah Mujhe Sab Sey Juda Janti Hain'},
{potery : 'Apny Buss Main Kar Laity Ho. / Uff Kitna Be-Bus Kar Daity Ho..'},
{potery : 'Waqt guzr gaya aur tu na aya. Chain o sukoon bichar gya magar Tu na aya.... Rhy halat yunhi to badl jaon ga main b Phr shkwa na krna intezar tera nah kia'},
{potery : 'Tears so wet blood so thick I can bearly walk Feeling so tortured and emotions so torn'},
]
let parent = document.getElementById('main')

for(let i = 0; i < arr.length; i++){
    let div = ` <div class="box">
    <h3>POETRY</h3>
    <p>${arr[i].potery}</p>
    
</div>`
    parent.innerHTML += div
}
