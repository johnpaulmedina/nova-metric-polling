<?php

namespace Johnpaulmedina\NovaMetricPolling;

trait ValueInterval
{
    
    public $refreshAtInterval = 0;

    /**
     * Set whether the metric should refresh every `n` seconds.
     *
     * @param  int  $value
     * @return $this
     */
    public function refreshAtInterval(int $value = 0)
    {
       $this->refreshAtInterval = $value * 1000;

       return $this;
    }


    /**
     * Prepare the metric for JSON serialization.
     *
     * @return array<string, mixed>
     */
    public function jsonSerialize(): array
    {
        return array_merge(parent::jsonSerialize(), [
            'refreshAtInterval' => $this->refreshAtInterval,
        ]);
    }
    
}
