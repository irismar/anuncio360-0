<?php

return [
	'@context' => 'http://www.schema.org',
	'@type' => 'LocalBusiness',
	'@id' => '[[:url]]',
	'name' => '[[title]]',
	'legalName' => '[[title]]',
	'description' => '[[description]]',
	'logo' => '[[logo]]',
	'url' => '[[:url]]',
	'telephone' => '[[phone]]',
	'email' => '[[email]]',
	'priceRange' => '[[price_range]]',
	'openingHours' => '[[work_hours]]',
	'photo' => '[[cover]]',
	'image' => '[[cover]]',
	'photos' => '[[gallery]]',
	'hasMap' => 'https://www.google.com/maps/@[[:lat]],[[:lng]]z',
	'sameAs' => '[[links]]',
	'address' => '[[location]]',
	'contactPoint' => [
		'@type' => 'ContactPoint',
		'contactType' => 'customer support',
		'telephone' => '[[phone]]',
		'email' => '[[email]]',
	],
	'geo' => [
		'@type' => 'GeoCoordinates',
		'latitude' => '[[:lat]]',
		'longitude' => '[[:lng]]',
	],
	'aggregateRating' => [
		'@type' => 'AggregateRating',
		'ratingValue' => '[[:reviews-average]]',
		'reviewCount' => '[[:reviews-count]]',
		'bestRating' => '[[:reviews-mode]]',
		'worstRating' => 0,
	],
];
