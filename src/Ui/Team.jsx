import './Team.css'

const Team = ({ name, img, role, uni, link }) => {
  return (
    <div className="Team">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={name} />
        <h3 className="mt-2">{name}</h3>
        <p className="mb-2 mt-[0!important]">{role}</p>
        <span>{uni}</span>
      </a>
    </div>
  )
}

export default Team
