import '@styles/globals.css';
import Nav from '@components/Nav';


export const metadata = {
  title: "Help Map",
  description: 'Yardım Et ve Destekle'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='tr'>
      <body>
              <div className="main">
                  <div className="gradient"></div>
              </div>
              <main className="app">
                  <Nav />
                  {children}
              </main> 
      </body>
    </html>
  )
}

export default RootLayout