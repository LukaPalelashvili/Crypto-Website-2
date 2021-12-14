// import '../../css/main.css';
import WalletIntro2x from '../../images/wallet-intro-2x.png'
import { ReactComponent as IconArrowWhite } from '../../images/icon-arrow-right-white.svg'

export const Security = () => {
  return (
    <>
      <main>
        {/* Header: 3D Animation */}
        {/* SECURITY */}
        <section
          style={{ marginTop: '100px', marginLeft: '20px' }}
          className="pt-16 xl:pt-0 head-area"
          id="head-area about"
        >
          <div className="max-w-screen-2xl mx-auto lg:px-12">
            <div id="particles-js" />
            <div className="grid md:grid-cols-2">
              <div className="relative px-8 self-center xl:mb-32">
                <span className="w-screen absolute -z-1 right-0 h-full" />
                <h1
                  style={{
                    color: 'rgb(255, 255, 255)',
                    animationDelay: '1.2s',
                    opacity: 1
                  }}
                  className="leading-tight font-display text-6xl xl:text-7xl 2xl:text-8xl"
                >
                  Secure Communication via decentralization&nbsp;
                </h1>
                <p
                  style={{
                    color: 'rgb(255, 255, 255)',
                    animationDelay: '1.5s',
                    opacity: 1
                  }}
                  className="text-gray-600 mt-12 text-xl 2xl:text-4xl font-display font-normal leading-normal"
                >
                  PCNP aims to be a pragmatic decentralized communication tool –
                  Our system automatically eliminates all third-party choking
                  points to minimize potential hacking attack vectors.&nbsp;
                </p>
                <p
                  style={{
                    color: 'rgb(255, 255, 255)',
                    animationDelay: '1.5s',
                    opacity: 1
                  }}
                  className="text-gray-600 mt-12 text-xl 2xl:text-4xl font-display font-normal leading-normal"
                >
                  Web 3.0 Browser gives you the ultimate authority for funds
                  transactions and highly private messaging with no third-party
                  interference. PCNP is a hack-proof, third-party
                  censorship-free, and foolproof secure software. Check more
                  about how PCNP serves with the best security for its users.
                </p>
              </div>
              <div className="relative mt-24 md:mt-0">
                <div className="md:-mt-24 mx-auto -ml-12 -mr-12 md:ml-0 md:mr-0 flex justify-end items-center md:pt-20">
                  <video
                    className="hidden md:block"
                    autoPlay
                    muted
                    loop
                    width={662}
                    height={756}
                  >
                    <source src="/video/wallet-intro.webm" type="video/webm" />
                    <source src="/video/wallet-intro.mp4" type="video/mp4" />
                  </video>
                  <img
                    src={WalletIntro2x}
                    style={{ animationDelay: '1.6s', opacity: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ marginLeft: '20px' }} className="custom-article">
          <div className="max-w-screen-xl mt-20 lg:mt-64 px-8 lg:px-20">
            <h2
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
              style={{ color: '#fff' }}
            >
              Guaranteed Security with 100% Anonymity at PCNP Messaging&nbsp;
            </h2>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-24 mt-12 lg:mt-32">
              <div>
                <h4
                  style={{ color: '#fff' }}
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  Uncensored Anonymous <br /> Messaging&nbsp;
                </h4>
                <p
                  style={{ fontSize: '1.4rem' }}
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
                >
                  Communicate the way you want to with a specific recipient.
                  PCNP users cna choose messages to be censored, blocked with
                  pseudo-names with readability access to targeted recipients.
                </p>
              </div>
              <div>
                <h4
                  style={{ color: '#fff' }}
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  Unbreachable Funds <br /> Transactions
                </h4>
                <p
                  style={{ fontSize: '1.4rem' }}
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
                >
                  Sending, storing, and receiving cryptocurrencies or tokens
                  within the PCNP wallet is safe from attack. Private keys are
                  never exposed. Transactions are only processed when initiated
                  and confirmed by the owner of the private keys.
                </p>
              </div>
              <div>
                <h4
                  style={{ color: '#fff' }}
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.2s"
                >
                  Zero Internet <br /> Surveillance
                </h4>
                <p
                  style={{ fontSize: '1.4rem' }}
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
                >
                  With Web 3.0 browser, PCNP ensures access to online
                  information to its user without any third party peeking into
                  your personal data. There is no lack or difference in the
                  security standards between PCNP&nbsp; wallet and
                  browser.&nbsp;
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl px-8 lg:px-20 mt-20">
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Secure Encrypted PCN Identity&nbsp;
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP users get a cryptographic keypair with account generation,
              which is protected by password. Users can add all the information
              into their PCNP profile. The end-user profile can be public or
              private as you want it.
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              P2P Communication Protocol
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP messaging uses Woku protocol to broadcast the targeted
              message which is encrypted and open to only intended recipients.
              PCNP’s users text information remains secure by removing
              third-party choke points. Woku Mail Servers are not completely
              based on peer-to-peer protocol as it stores your message when your
              recipient is offline and forwards when online.
            </p>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              <a
                href="https://specs.vac.dev/specs/waku/waku.html"
                target="_blank"
                rel="noopener"
                className="link-arrow"
              >
                Learn more about Waku
              </a>
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Secure End-to-End Communication Protocol
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              End-to-End encryptions generates a public Key shared between
              sender and recipient, as it allows the message to be exclusive
              between both and decrypted by the recipient contact only.
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Additional Security with PFS
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Perfect Forward Secrecy secures your past and future data even if
              the session key is compromised. PFS serves an additional assured
              layer of security with specific key agreement for one to one PCNP
              messaging.&nbsp;
            </p>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              <a href="/technical/pfs.html" className="link-arrow">
                Learn more about PFS
              </a>
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Pseudo-Anonymous PCNP Accounts
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP won’t ask for your personal identity information to generate
              a new account. We don’t need any&nbsp; third party verification
              like your contact number, or email to sign up. User’s only have
              Keys and mnemonic phrases to get access into a PCNP account.&nbsp;
              <br />
              <br />
              Users don’t have any two-factor authentication or password
              recovery system in case you forget any of your keys or phrases.
              Users are recommended to store passwords, keys and phrases in an
              offline extension in case they forget.&nbsp;
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Securing Your PCNP User’s Key&nbsp;
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP user’s public and private keys are stored in a keystore json
              file locally into the device’s memory. We will never use third
              party services to store and manage user’s public and private
              keys.&nbsp; After the PCNP account is generated, the first BIP44
              key is saved on the user's device locally.
            </p>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              The json file is encrypted with your password and only accessible
              to the user via PCNP app. Our system will always prioritize
              storing highly sensitive data first on your device. KeyCard is an
              additional hardware extension to add another layer of security for
              contactless payments, managing and storing private keys.&nbsp;
            </p>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              For more information on Keycard, visit{' '}
              <a href="https://keycard.tech" target="_blank">
                keycard.tech
              </a>
              .
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Secure Incognito Web 3.0 Browsing&nbsp;
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP secure Web 3.0 browser with default privacy mode enabled for
              the end users. PCNP’s browser keeps users informed and their
              wallets secured, that’s why DApps permission prior to connecting
              with PCNP wallet and DApp might break too if not compatible.&nbsp;
              <br />
              <br />
              To save gas fees and reduce the number of transactions on the
              blockchain, PCNP browser has adapted and uses EIP712. PCNP browser
              aims to enhance usability with EIP417 using off-chain message
              signing for on-chain use. Currently, PCNP messages are signed with
              an opaque hex string displayed to the user with least context
              about what the message’s make up.
            </p>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              <a
                href="https://eips.ethereum.org/EIPS/eip-712"
                target="_blank"
                className="link-arrow"
              >
                Learn more about the EIP
              </a>
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Protection With Non-Custodial PCNP Wallet&nbsp;
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP wallet users have absolute power with non-custodial wallets
              over their funds and transactions without using any server. Only
              with the user's mnemonic phrase and private keys the crypto-wallet
              is accessible as the data is encrypted on your device.&nbsp;
              <br />
              <br />
              Users are recommended to save private key and phrase additionally
              in an offline storage in case the PCNP wallet user loses or
              forgets the data.&nbsp;
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Refrain Phishing Attacks With 3 Word Sign-In Phrase
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              To sign all the crypto-transactions the PCNP users are required to
              sign using a randomly generated 3-word phrase. The anti-phishing
              3- word phrase is stored locally on the device every time the user
              initiates a transaction. <br /> <br />
              If in case the user doesn’t recognize a 3-word phrase or is
              presented with no phrase. PCNP users are advised to immediately
              cancel the transactions, log out of the account and report to us.
            </p>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              <a
                href="https://discuss.pcnp.io/t/psa-general-security-information/1562"
                target="_blank"
                className="link-arrow"
              >
                You can learn more about phishing and its potential damages.
              </a>
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Diligent Auditing&nbsp;
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              APCNP keeps striving to get better regularly. To verify that we
              actually excel in providing the best secure communications and
              wallet services, tools with sorted exclusive features, we asked
              leading third-party firms to check our system.&nbsp;
              <br /> <br />
              To gain our user’s confidence, leading third party firms run
              security audits as additional checks and conclude with no bugs or
              vulnerabilities detected till now. However, these additional
              security audits are not guaranteed as the PCNP system is evolving
              regularly to serve the user with a fast, secure and one protected
              platform for all transactions.&nbsp;
            </p>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              You can check our external audits to understand how the PCNP
              system is an excellent one.{' '}
              <a
                href="https://github.com/PCN-Protocol/PCNP-security#audits"
                target="_blank"
                rel="noopener"
              >
                {' '}
                Check here
              </a>
              for further info.
            </p>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              If you detect any Bugs or vulnerabilities in our system do report
              here immediately,&nbsp;{' '}
              <a href="/cdn-cgi/l/email-protection#0f7c6a6c7a7d667b764f7c7b6e7b7a7c216662">
                <span
                  className="__cf_email__"
                  data-cfemail="f586909680879c818cb5868194818086db9c98"
                >
                  [email&nbsp;protected]
                </span>
              </a>
              .
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              How PCNP encourages Cyber Security with our Best Practices Guide
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP aims to serve its privileged users with freedom to browse,
              chat, send, receive or transact funds without the worry or fear of
              online surveillance, interferences, data leakage, and intended
              censorship by third parties or even by PCNP itself.
            </p>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP revolutionizes digital security for users while online
              browsing, messaging and e-wallet forever by forwarding all the
              authority to the user. Our mission is to educate everyone about
              the right to privacy, and how to protect your personal online data
              and activity from third-party.&nbsp;Learn more from PCNP’s Best
              Security{' '}
              <a
                href="/user_guides/best_security_practices.html"
                target="_blank"
                className="link-arrow"
              >
                {' '}
                Practices Guide
              </a>
              to understand how PCNP users can stay safe.
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              24/7 Security Support&nbsp;
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              PCNP’s proactive backup security team is available 24/7 at your
              service. For any of your concerts or queries regarding our
              security do kindly email us at{' '}
              <a href="/cdn-cgi/l/email-protection#f18294928483988588b1828590858482df989c">
                <span
                  className="__cf_email__"
                  data-cfemail="e695838593948f929fa6959287929395c88f8b"
                >
                  [email&nbsp;protected]
                </span>
              </a>{' '}
              or reach out to our Public Security Channel&nbsp;{' '}
              <a
                href="https://join.pcnp.io/chat/public/PCNP-security"
                target="_blank"
              >
                #PCNP-security
              </a>
              .
            </p>
            <h3
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Hacker one Campaign &amp; Bug Bounty Program
            </h3>
            <p
              style={{ fontSize: '1.4rem' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              Prove your expertise as a developer or security researcher by
              detecting any possible bugs or vulnerabilities in our system and
              contact us immediately via{' '}
              <a href="/cdn-cgi/l/email-protection#f18294928483988588b1828590858482df989c">
                <span
                  className="__cf_email__"
                  data-cfemail="c7b4a2a4b2b5aeb3be87b4b3a6b3b2b4e9aeaa"
                >
                  [email&nbsp;protected]
                </span>
              </a>
              to get more info about the Bug Bounty Program.&nbsp;
              <br /> <br />
              PCNP’s Hacker One campaign rewards hackers incentives for checking
              our projects. Right now our campaign is privately quite actively
              growing but sooner will launch a public version.&nbsp; For more
              details about Bug Bounty Program, please contact @{' '}
              <a href="/cdn-cgi/l/email-protection#6310060016110a171a231017021716104d0a0e">
                <span
                  className="__cf_email__"
                  data-cfemail="0675636573746f727f46757267727375286f6b"
                >
                  [email&nbsp;protected]
                </span>
              </a>
              .
            </p>
            <ul
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              <li>
                <p style={{ fontSize: '1.4rem' }}>
                  <a
                    href="https://github.com/PCN-Protocol/ens-usernames/commit/eaefa92a258c784f1df4066e057e8170bcb6ef95#diff-dbff1e6b987cbb9a6b87ea8180c41e72"
                    target="_blank"
                    rel="noopener"
                  >
                    October 2018 - ENS Username Contract - commit hash eaefa92
                  </a>
                </p>
              </li>
              <li>
                <p style={{ fontSize: '1.4rem' }}>
                  <a
                    href="https://drive.google.com/open?id=1BqiPGBjILgbIlmMXAO8AombxW_jsQtfC"
                    target="_blank"
                    rel="noopener"
                  >
                    report
                  </a>
                </p>
              </li>
              <li>
                <p style={{ fontSize: '1.4rem' }}>
                  <a
                    href="https://drive.google.com/open?id=12ACYXvPn8WUyRg9WCooUTO3vvJVuo7lL"
                    target="_blank"
                    rel="noopener"
                  >
                    tests
                  </a>
                </p>
              </li>
              <li>
                <p style={{ fontSize: '1.4rem' }}>
                  <a
                    href="https://blog.sigmaprime.io/PCNP-ens-review.html"
                    target="_blank"
                    rel="noopener"
                  >
                    blog post
                  </a>
                </p>
              </li>
            </ul>
            <h4
              style={{ color: '#fff' }}
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.2s"
            >
              Deja Vu Beta Audit
            </h4>
            <ul
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.4s"
            >
              <li>
                <p style={{ fontSize: '1.4rem' }}>
                  <a
                    href="https://drive.google.com/file/d/1wB5pGPaNsQwq2udV7NmHkLuW-2JCMbnV/view"
                    target="_blank"
                    rel="noopener"
                  >
                    report
                  </a>
                </p>
              </li>
              <li>
                <p style={{ fontSize: '1.4rem' }}>
                  <a
                    href="https://blog.pcnp.io/PCNP-deja-vu-security-audit-final-report-5b6eda5a683a"
                    target="_blank"
                    rel="noopener"
                  >
                    blog post
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{ marginLeft: '20px' }}
          className="max-w-screen-xl px-8 lg:px-20 mt-20 lg:mt-64"
        >
          <div className="grid lg:grid-cols-2 lg:gap-24">
            <div>
              <h2
                style={{ color: '#fff' }}
                className="font-display text-4xl xl:text-5xl 2xl:text-6xl  animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.2s"
              >
                Protect Yourself
              </h2>
              <p
                style={{ color: '#fff' }}
                className="mt-16 text-gray-600 text-lg 2xl:text-2xl font-display font-normal leading-normal animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.4s"
              >
                PCNP is built with state of the art technology to ensure the
                product is a secure as possible. When it comes to navigating
                Web3, you are in control. See our list of security best
                practices and take control.
              </p>
              <ul className="list-none flex flex-col lg:flex-row text-lg 2xl:text-xl font-bold lg:items-center -ml-16 mt-4">
                <li className="ml-16 mt-12">
                  <a
                    className="group text-primary-base font-special flex hover:text-primary-900 semibold items-center animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                    href="https://notes.pcnp.io/Fa9h9kCVRtm82PcgQ31Y7w"
                    target="_blank"
                  >
                    Learn More
                    <span className="ml-4 group-hover:translate-x-1 transform transition-all duration-200 linear">
                      <IconArrowWhite />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div style={{-bgOpacity: 1, backgroundColor: 'rgba(67, 96, 223, var(--bg-opacity))'}} className="bg-primary-base px-8 py-20 mt-20 lg:mt-0 lg:p-20 text-white -mr-8 -ml-8 lg:mx-0 lg:mb-64">
                <h2 className="font-display text-4xl xl:text-5xl 2xl:text-6xl animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Private sale</h2>
                <p className="mt-16 text-primary-300 text-lg 2xl:text-2xl font-display font-normal leading-normal animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Start enjoying PCNP on iOS and Android.</p>
                <a href="form.html" className="btn-gradient-purple btn-glow flex md:inline-flex items-center font-special font-bold py-4 px-6 font-bold border text-white border-primary-base rounded hover:bg-primary-900 hover:text-white px-6 mt-12 animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="0.4s">
                  Download Apps
                </a>
              </div> */}
        </div>

        {/* END-SECURITY */}
      </main>
    </>
  )
}
