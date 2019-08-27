import React from 'react'

const Avatar = (props) => {
  const { avatar, onChangeAvatar, error } = props
  return(
    <div>
      <img className="avatar" src={avatar || "/path/to/default/avatar"} alt="avatar"/>
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="customFile"
          name="avatar"
          placeholder="Choose Avatar"
          onChange={onChangeAvatar}
        />
        <label className={error ? "custom-file-label invalid" : "custom-file-label"} htmlFor="customFile">
          Choose avatar
        </label>
        {error && <p className="invalid-feedback">{error}</p>}
      </div>
    </div>
  )
}

export default Avatar
