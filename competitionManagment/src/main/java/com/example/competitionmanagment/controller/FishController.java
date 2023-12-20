package com.example.competitionmanagment.controller;

import com.example.competitionmanagment.Mapper.FishMapper;
import com.example.competitionmanagment.dto.fish.FishDto;
import com.example.competitionmanagment.entity.Fish;
import com.example.competitionmanagment.service.serviceInterface.FishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("fish")
public class FishController {

    @Autowired
    private FishService fishService;

    @GetMapping("")
    public List<FishDto> fetch(){
        List<FishDto> fishDtos = new ArrayList<>();
        List<Fish> fish = fishService.FetchFish();
        for(Fish fish1 : fish){
           FishDto fishDto =  FishMapper.FM.toDto(fish1);
           fishDtos.add(fishDto);
        }
        return fishDtos;
    }


    @PostMapping("/create")
    public ResponseEntity<Fish> createFish(@RequestBody FishDto fishDto) {
        Fish createdFish = fishService.createFish(fishDto);
        return new ResponseEntity<>(createdFish, HttpStatus.CREATED);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Fish> getFishByName(@PathVariable String name) {
        Optional<Fish> fish = fishService.findFishByName(name);
        return fish.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/update/{name}")
    public ResponseEntity<Fish> updateFish(@PathVariable String name, @RequestBody FishDto updatedFishDto) {
        Fish updatedFish = fishService.updateFish(name, updatedFishDto);
        return updatedFish != null ?
                new ResponseEntity<>(updatedFish, HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{name}")
    public ResponseEntity<Void> deleteFish(@PathVariable String name) {
        fishService.deleteFish(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
