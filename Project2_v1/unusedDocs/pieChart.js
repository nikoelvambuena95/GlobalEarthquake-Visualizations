var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Waveform Distribution",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasHeight": 400,
		"canvasWidth": 400,
		"pieOuterRadius": "86%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "ml",
				"value": 7440,
				"color": "#DAF7A6"
			},
			{
				"label": "mb",
				"value": 1099,
				"color": "#FFC300"
			},
			{
				"label": "md",
				"value": 2038,
				"color": "#FF5733"
			},
			{
				"label": "mww",
				"value": 89,
				"color": "#C70039"
			},
			{
				"label": "mb_lg",
				"value": 58,
				"color": "#900C3F"
			},
			{
				"label": "other",
				"value": 34,
				"color": "#e4a14b"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	}
});
