package com.urban.garden.sensors.urbangarden.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class SensorController {

    @RequestMapping(value = "/sensor/upload", method = RequestMethod.POST)
    public void testController(@RequestBody String input){
        System.out.println(input);
    }
    
}