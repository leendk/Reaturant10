import Footer from "./Footer";

export default function LandingPage(){
  return(
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      width: '100%'
    }}>
      <div style={{ flex: 1 }}>
        {/* المحتوى الرئيسي سيأتي هنا */}
      </div>
      <Footer/>
    </div>
  )
}