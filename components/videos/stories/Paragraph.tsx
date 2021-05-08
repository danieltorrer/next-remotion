import {interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';

const StyledParagraph = styled.p`
	font-size: 60px;
`;

export type ParagraphProps = {
	text: string;
	paragraphColor: string;
	className?: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({
	text,
	paragraphColor,
	className = '',
}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<StyledParagraph
			style={{opacity, color: paragraphColor}}
			className={className}
		>
			{text}
		</StyledParagraph>
	);
};
