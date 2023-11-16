import ContentLoader from 'react-content-loader'

const CourseSkeleton = props => (
    <ContentLoader speed={1} height={350} width="100%" {...props} backgroundColor='#fff' >
        <rect x="3" y="3" rx="10" ry="10" width="98%" height="200" />
        <rect x="4" y="210" rx="0" ry="0" width="98%" height="20" />
        <rect x="4" y="240" rx="0" ry="0" width="98%" height="20" />
        <rect x="4" y="270" rx="0" ry="0" width="98%" height="20" />
    </ContentLoader>
)

export default CourseSkeleton;
