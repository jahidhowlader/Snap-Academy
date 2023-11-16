import ContentLoader from 'react-content-loader'

const OfferSkeleton = props => (
    <ContentLoader speed={1} height={320} width="100%" {...props} backgroundColor='#fff' >
        <rect x="3" y="3" rx="10" ry="10" width="98%" height="300" />
    </ContentLoader>
)

export default OfferSkeleton;
