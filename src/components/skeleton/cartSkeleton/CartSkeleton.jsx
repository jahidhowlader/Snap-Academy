import ContentLoader from 'react-content-loader'

const CartSkeleton = props => (
    <ContentLoader speed={1} height={350} width="100%" {...props} backgroundColor='#fff' >
        <rect x="3" y="3" rx="10" ry="10" width="98%" height="200" />
    </ContentLoader>
)

export default CartSkeleton;
