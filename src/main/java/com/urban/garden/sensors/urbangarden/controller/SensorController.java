package com.urban.garden.sensors.urbangarden.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController(value="/rest/sensor/")
public class SensorController {

    @RequestMapping(value = "test", method = RequestMethod.GET)
    public void testController(){
        System.out.println("test");
    }
    
}