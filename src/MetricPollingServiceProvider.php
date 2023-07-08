<?php

namespace Johnpaulmedina\NovaMetricPolling;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class MetricPollingServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-metric-polling', __DIR__.'/../dist/js/nova-metric-polling.js');
            Nova::style('nova-metric-polling', __DIR__.'/../dist/css/nova-metric-polling.css');
        });
    }

}
