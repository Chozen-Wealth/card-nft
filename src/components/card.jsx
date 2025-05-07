import "./card.css"
import nft from "../../public/nft-preview-card-component-main/images/image-equilibrium.jpg"
import profilePic from "../../public/nft-preview-card-component-main/images/image-avatar.png"

export default function Card() {
    return (
        <div className="card">
            <div className="picture">
                <img src={nft} alt="" />
            </div>
            <div className="infos">
                <span className="title">Equilibrium #3429</span>
                <span className="description">Our Equilibrium collection promotes
                balance and calm.</span>
                <div className="priceAndTime">
                    <span className="price"><img src="../../public/nft-preview-card-component-main/images/icon-ethereum.svg" alt="" />0.041ETH</span>
                    <span className="time"><img src="../../public/nft-preview-card-component-main/images/icon-clock.svg" alt="" /> 3 days left</span>
                </div>
            </div>
            <div className="author">
                <img src={profilePic} alt="" />
                <span>Creation of <span>Jules Wyvern</span></span>
            </div>
        </div>
    )
}
