import Img from './assets/lol.jpg'
import { base64Photo } from './Base'
import Logo from './assets/react.svg'
import { useState } from 'react'
import Styles from './style.module.css'
import Style from './App.module.css'
import Bt1 from './bt1.module.css'
import Nightday from './nightday.module.css'

function App() {

  // thực hành 2
  const [numClicked, setNumClicked] = useState(0)
  const handleClick = () => {
    setNumClicked(numClicked + 1);
  }
  const testStyle = (numClicked % 2 === 0) ? Styles.textBlue : Styles.textRed;
  // -------------------------------------------------------------------------

  // bai tap 2
  const [time, setTime] = useState('day')
  const handleClickButtonNight = () => {
    setTime('day');
  }

  const handleCLickButtonDay = () => {
    setTime('night');
  }
   const testNightDay = (time === 'day') ? Nightday.content1 : Nightday.content2;

  return (
    <div>

      {/* thực hành 1 */}
      <div>
        <p>dùng ảnh trong reactjs</p>
        <img src={Img} width='400' height='300' alt="" />
        <p>tạo 1 file khác và import vào app    </p>
        <img src={base64Photo} alt="" />
        <p>dùng link online</p>
        <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <p>Logo</p>
        <img src={Logo} alt="" className='logo' />
      </div>

      {/* thực hành 2*/}
      <div className='App'>
        <button onClick={handleClick}>click!</button>
        <h2 className={testStyle}>you clicked {numClicked} times</h2>
      </div>

      {/* thực hành 3 css*/}
      <div className={Style.container}>
        <h1 className={Style.title}>Login</h1>
        <form>
          <p className={Style.fieldTitle}> Nhập email</p>
          <input type="text" name='email' className={Style.input} />
          <p className={Style.fieldTitle}> Nhập password</p>
          <input type="password" name='password' className={Style.input} />
          <br />
          <label>
            <input type="checkbox" className={Style.checkbox} name='isRead' />  I read and accept the privacy policy:
          </label>
          <br />
          <button className={Style.btnSubmit}>Submit</button>
        </form>
      </div>

      {/* thực hành 4 tailwind */}
      <div className="p-4">
        <h1 className="text-blue-500 font-bold text-4xl">Login</h1>
        <form>
          <p className="mt-8">Nhập email:</p>
          <input
            className="border rounded border-blue-600 h-9 w-full mt-2"
            name="email"
            type="text"
          />
          <p className="mt-4">Nhập password:</p>
          <input
            className="border rounded border-blue-600 h-9 w-full mt-2"
            name="password"
            type="password"
          />
          <br />
          <label>
            <input
              className="mt-4"
              name="isRead"
              type="checkbox" /> I read and accept the privacy policy
          </label>
          <br />
          <button className="mt-8 h-9 border rounded w-40 bg-blue-400 text-white font-bold">
          </button>
        </form>
      </div>

      {/* bai tap 1 */}
      <div className={Bt1.container1}>
        <div className={Bt1.sidebar}></div>
        <div className={Bt1.content}></div>
      </div>

      {/* bai tap 2 */}
      <div>
        <button className={Nightday.day} onClick={handleClickButtonNight}>day</button>
        <button className={Nightday.night} onClick={handleCLickButtonDay}>night</button>
        <div className={testNightDay}></div>
      </div>
    </div>
  )
}

export default App
