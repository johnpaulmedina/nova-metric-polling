[![Latest Version on Packagist](https://img.shields.io/packagist/v/johnpaulmedina/nova-metric-polling.svg?style=for-the-badge)](https://packagist.org/packages/johnpaulmedina/nova-metric-polling)
[![Total Downloads](https://img.shields.io/packagist/dt/johnpaulmedina/nova-metric-polling.svg?style=for-the-badge)](https://packagist.org/packages/johnpaulmedina/nova-metric-polling)
# Laravel Nova Metric Polling

An extension of Laravel Nova Metrics to allow for interval polling. Want your Nova dashboard metrics up to date without refreshing, or having to apply a filter? These metrics extend the existing builtin Laravel Nova 4 Metrics and will allow for an interval duration to be set that will trigger an automatic refresh of any number of metrics displayed.

Simple integration to existing Nova\Metrics

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require johnpaulmedina/nova-metric-polling
```

The package will be automatically registered via the `MetricPollingServiceProvider`

## Usage

First, add the following trait `use Johnpaulmedina\NovaMetricPolling\ValueInterval` to any of your Nova Metrics

```php
<?php

namespace App\Nova\Metrics;

use Johnpaulmedina\NoveMetricPolling\ValueInterval;

```

Next, let your Metric class inherit the `ValueInterval` trait through the use keyword like so

```php
<?php

namespace App\Nova\Metrics;

use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Value;
use Laravel\Nova\Nova;
use Johnpaulmedina\NovaMetricPolling\ValueInterval;

class ActiveUsers extends Value
{
    use ValueInterval;

```

Finally, instantiate your Metric and call the `refreshAtInterval(Int: n)` method. 
The method accepts an integer value which will be calculated in seconds.

```php
    /**
     * Get the cards available for the request.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [
            (new Metrics\ActiveUsers())->refreshAtInterval(300), // (IE: 300 seconds / 60 = 5 minutes)
        ];
    }
```

Alternatively, you may also set and integer value on the public property `$refreshAtInterval`.

```php
<?php

namespace App\Nova\Metrics;

use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Value;
use Laravel\Nova\Nova;
use Johnpaulmedina\NovaMetricPolling\ValueInterval;

class ActiveUsers extends Value
{
    use ValueInterval;

    public $refreshAtInterval = 300; // (IE: 300 seconds / 60 = 5 minutes)

```


## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

