export default function CTAButton(title,srcImage,imgWidth, imgHeight) {
    return (
    `<button class="cta-button oswald-400" href="#">${title}
            <div>
                <img src=${srcImage} width=${imgWidth} height=${imgHeight}>
            </div>
    </button>` )
}