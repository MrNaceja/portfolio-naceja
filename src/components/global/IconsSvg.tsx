interface IiconSvgProps {
    icon: string
}
export const IconSvg = ({ icon } : IiconSvgProps) => {
    return (
        <i dangerouslySetInnerHTML={{ __html: icon }}></i>
    )
}