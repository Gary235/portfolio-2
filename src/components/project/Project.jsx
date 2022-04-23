
import TextGradient from "../../components/text-gradient/TextGradient"
import { TitleM } from "../../styled-components/titles"

const Project = (props) =>{
  const {title, description, image} = props

  return (
    <div style={{display: 'flex', width: '100%', height: '50vh', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <TitleM><TextGradient>{title}</TextGradient></TitleM>
        <p style={{color: 'white'}}>{description}</p>
      </div>
      <div style={{ background: `url(${image})`, width: '50%', height: '100%', backgroundSize: 'cover', transition: 'all 1s'}} />
    </div>
  )
}

export default Project