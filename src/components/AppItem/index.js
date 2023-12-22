import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails
  return (
    <>
      <li className="app-item-continer">
        <img
          className="app-iem-image"
          src={imageUrl}
          alt={`app-item${appId}`}
        />
        <div className="app-item-details-container">
          <h1 className="app-item-title">{appName}</h1>
        </div>
      </li>
    </>
  )
}

export default AppItem
