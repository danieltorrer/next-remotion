import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const StyledH1 = styled.h1`
	font-size: 90px;
	width: 100%;
	text-align: center;
	padding-bottom: 90px;
	/* text-shadow: 4px 4px #333333; */
	text-shadow: 0px 0px 0 rgb(137, 156, 213), 1px 1px 0 rgb(129, 148, 205),
		2px 2px 0 rgb(120, 139, 196), 3px 3px 0 rgb(111, 130, 187),
		4px 4px 0 rgb(103, 122, 179), 5px 5px 0 rgb(94, 113, 170),
		6px 6px 0 rgb(85, 104, 161), 7px 7px 0 rgb(76, 95, 152),
		8px 8px 0 rgb(68, 87, 144), 9px 9px 0 rgb(59, 78, 135),
		10px 10px 0 rgb(50, 69, 126), 11px 11px 0 rgb(42, 61, 118),
		12px 12px 0 rgb(33, 52, 109), 13px 13px 0 rgb(24, 43, 100),
		14px 14px 0 rgb(15, 34, 91), 15px 15px 0 rgb(7, 26, 83),
		16px 16px 0 rgb(-2, 17, 74), 17px 17px 0 rgb(-11, 8, 65),
		18px 18px 0 rgb(-19, 0, 57), 19px 19px 0 rgb(-28, -9, 48),
		20px 20px 0 rgb(-37, -18, 39), 21px 21px 20px rgba(0, 0, 0, 1),
		21px 21px 1px rgba(0, 0, 0, 0.5), 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export type TitleProps = {
	titleText: string;
	titleColor: string;
};

export const Title: React.FC<TitleProps> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = titleText.split(' ').map((t) => ` ${t} `);
	return (
		<StyledH1>
			{text.map((t, i) => {
				return (
					<span
						key={t + i}
						style={{
							color: titleColor,
							marginLeft: 15,
							marginRight: 15,
							transform: `scale(${spring({
								fps: videoConfig.fps,
								frame: frame - i * 6,
								config: {
									damping: 100,
									stiffness: 400,
									mass: 0.9,
								},
							})})`,
							display: 'inline-block',
						}}
					>
						{t}
					</span>
				);
			})}
		</StyledH1>
	);
};
