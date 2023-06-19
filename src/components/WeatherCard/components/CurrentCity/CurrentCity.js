import Temperature from '../../../Temperature'
import Meta from './components/Meta'
import Weather from './components/Weather'
import Name from '../../../Name'

const CurrentCity = () => {
  return (
    <>
      <div>CurrentCity</div>
      <Temperature />
      <Weather />
      <Meta />
      <Name />
    </>
    
  )
}
export default CurrentCity;