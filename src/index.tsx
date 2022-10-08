import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import WhatsAppWidget from "./WpWidget";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <WhatsAppWidget
        sendButtonText={"Gönder"}
        phoneNumber="+901111111111"
        inputPlaceHolder={"Mesajınızı Giriniz"}
        companyName={"Şirket İsmi"}
        replyTimeText={"Online"}
        message={"Merhabalar! \uD83D\uDC4B\uD83C\uDFFC \n\nBizimle iletişime geçebilirsiniz"}
    />
  </React.StrictMode>
);

reportWebVitals();
