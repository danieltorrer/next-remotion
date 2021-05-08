import {Img} from 'remotion';
import styled from 'styled-components';
import {borderSize, defaultPadding, imageOffset} from './constants';

const Container = styled.div`
	flex: 1;
	padding: ${defaultPadding * 3}px ${defaultPadding}px;
	position: relative;
`;

const Wrapper = styled.div`
	width: 100%;
	height: calc(100% - ${imageOffset}px);
	position: relative;
`;

const StyledNewsImageContainer = styled.div`
	background: none;
	padding: ${defaultPadding * 1}px;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
`;

const StyledNewsImageBorder = styled(({border, ...props}) => (
	<div border={border} {...props} />
))`
	border: ${borderSize}px solid ${({border}) => border};
	width: 100%;
	height: 100%;
`;

const StyledRemotionImage = styled(Img)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export type NewsImageProps = {src: string; border: string};

export const NewsImage: React.FC<NewsImageProps & {opacity: number}> = ({
	src,
	border,
	opacity,
}) => {
	return (
		<Container>
			<Wrapper>
				<StyledRemotionImage src={src} />
				<StyledNewsImageContainer>
					<StyledNewsImageBorder border={border} style={{opacity}} />
				</StyledNewsImageContainer>
			</Wrapper>
		</Container>
	);
};
