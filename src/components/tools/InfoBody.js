import React from 'react'
import { Link } from 'react-router-dom'

const InfoBody = () => {
    return (
        <>
          <h4>Nasıl Kullanılır ?</h4>
          <p>
          Siteye ilk girildiğinde <a target="_blank" rel="noreferrer" href="https://www.wired.com/most-recent/"><b>"wired.com"</b></a> üzerinden anlık olarak çekilen 5 adet makale başlığı bizi karşılar. 
          Makale başlıklarından herhangi birine tıklandığında sayfa genişleyerek makale içeriği, soru ekleme ve sınav oluşturma bileşenleri görünür.
          Başlığa tekrar tıklandığında ise makale içeriği, soru ve sınav oluşturma bileşenleri tekrar gizlenir. 
          </p>
          <p>
          Sınav oluşturmak için öncelikle siteye giriş yapılmalıdır. 
          Sağ üst köşedeki <Link to="/register"><b>"Register"</b></Link> butonundan yeni kayıt oluşturabilir veya <b>"Email Address: admin@admin.com Password: admin"</b> bilgileri ile sağ üst köşedeki <Link to="/login"><b>"Login"</b></Link> butonuna tıklanarak giriş yapılabilir.
          </p>
          <p> 
          Giriş yaptıktan sonra en az 1 adet soru cevap şıkları girilip ve doğru cevap seçilip <b>"Add The  Question"</b>butonuna tıklanmalıdır. 
          Daha sonra <b>"CREATE EXAM"</b> butonuna tıklanarak sınav oluşturulur. 
          </p>
          <p>
          Sınav oluşturduktan sonra üst menüden <Link to="/exams"><b>"Exams"</b></Link> bağlantısı takip edilirse kendi oluşturduğumuz sınav ile birlikte diğer kullanıcıların oluşturmuş olduğu sınavlar da listelenecektir. 
          Sadece kendi oluşturmuş olduğumuz sınav veya sınavları listelemek istiyorsak sağ üstteki açılır menüden <Link to="/myexams"><b>"My Exams"</b></Link> bağlantısı takip edilebilir. 
          </p>
          <p>
          Açılan <Link to="/exams"><b>"Exams"</b></Link> ya da <Link to="/myexams"><b>"My Exams"</b></Link> sayfasında oluşturmuş olduğunuz sınav bulunup üzerine tıklanır ve sınava giriş yapılır. 
          Doğru cevaplar işaretlenip <b>"SUBMIT"</b> butonuna basılınca doğru olanlar yeşil, yanlış olanlar kırmızı renge boyanacaktır.
          </p>
        </>
    )
}

export default InfoBody
