import {AbsoluteFill} from 'remotion';
import styled from 'styled-components';

const StyledBackgroundRect = styled.div`
	width: 200%;
	height: 50%;
	background: #f6fbff;
	transform: translateY(0px) translateX(200px) rotate(45deg);
`;

export type BackgroundProps = {background: string};

export const Background: React.FC<BackgroundProps> = ({background}) => {
	return (
		<AbsoluteFill style={{background}}>
			<StyledBackgroundRect />
		</AbsoluteFill>
	);
};
