
# Cars App

Bu proje, React Native kullanarak geliştirilmiş bir araba listesi uygulamasıdır. Uygulama, belirli bir API'den araba markaları ve modelleri ile ilgili bilgileri alır ve kullanıcıya görüntüler.

### Gereksinimler

Bu projenin çalışması için aşağıdaki araçlara ihtiyacınız olacak:

- Node.js
- npm veya yarn
- React Native CLI veya Expo CLI

### Kurulum

Projeyi yerel makinenize klonlayın:

```bash
git clone https://github.com/your-username/cars-app.git
cd cars-app
```

Gerekli bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn install
```

### Çalıştırma

Uygulamayı çalıştırmak için aşağıdaki komutu kullanın:

```bash
npx react-native run-android
# veya
npx react-native run-ios
```

### Bileşenler

- **Header**: Uygulamanın üst kısmında görünen başlık bileşeni.
- **CarList**: API'den alınan araba markalarını ve modellerini listeleyen bileşen.
- **CarDetail**: Belirli bir araba markası ve modeli ile ilgili detayları görüntüleyen bileşen.
- **Item** ve **ItemSection**: Arabaları listelemek için kullanılan yardımcı bileşenler.
- **Button**: Harici bağlantılara yönlendirme yapmak için kullanılan düğme bileşeni.

### API

Uygulama, aşağıdaki API'yi kullanarak araba bilgilerini alır:

```
https://givecars.herokuapp.com
```

## Kullanım

Uygulama başlatıldığında, araba markaları ve modelleri liste halinde görüntülenir. Her bir markanın üzerine tıklanarak detay sayfasına gidilebilir. Detay sayfasında, araba modeline ait bir resim ve harici bir bağlantıya yönlendiren bir düğme bulunur.

