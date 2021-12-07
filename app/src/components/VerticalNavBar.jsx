export const VerticalNavBar = () => {
  return (
    <>
      <nav
        className="vertical-social"
        style={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          right: '0px',
          overflow: 'hidden',
          height: '218.8px'
        }}
      >
        <div
          className="midnightHeader default"
          style={{
            position: 'absolute',
            overflow: 'hidden',
            inset: '0px',
            transform: 'translateY(0%) translateZ(0px)'
          }}
        >
          <div
            className="midnightInner"
            style={{
              position: 'absolute',
              overflow: 'auto',
              inset: '0px',
              transform: 'translateY(0%) translateZ(0px)'
            }}
          >
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/PCNProtocol/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/PcnProtocol"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/PCNProtocol/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  <i className="fa fa-reddit" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCGkShKklTgRovjWVai_w4OQ"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="midnightHeader white"
          style={{
            position: 'absolute',
            overflow: 'hidden',
            inset: '0px',
            transform: 'translateY(110%) translateZ(0px)'
          }}
        >
          <div
            className="midnightInner"
            style={{
              position: 'absolute',
              overflow: 'auto',
              inset: '0px',
              transform: 'translateY(-110%) translateZ(0px)'
            }}
          >
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/PCNProtocol/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/PcnProtocol"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/PCNProtocol/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  <i className="fa fa-reddit" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCGkShKklTgRovjWVai_w4OQ"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
