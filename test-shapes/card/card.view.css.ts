$mol_style_define( $shapes_shape_card, {
	flex: {
		basis: rem(5),
		grow: 1,
		shrink: 1,
	},
	
	aspectRatio: '1/1',
	maxWidth: vh(50),
	
	'@': {
		
		shapes_shape_card_form: {
			circle: {
				border: {
					radius: per(50),
				},
			},
			triangle: {
				clipPath: `polygon( 50% 0, 100% 100%, 0 100% )`,
			},
		},
		
		shapes_shape_card_bright: {
			dark: {
				filter: 'brightness(.5)',
			},
		},
		
	},
	
} )