package com.example.competitionmanagment.service;

import com.example.competitionmanagment.Mapper.FishMapper;
import com.example.competitionmanagment.dao.FishRepository;
import com.example.competitionmanagment.dto.fish.FishDto;
import com.example.competitionmanagment.entity.Fish;
import com.example.competitionmanagment.entity.Level;
import com.example.competitionmanagment.service.serviceInterface.FishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FishServiceImp implements FishService {


    @Autowired
    private FishRepository fishRepository;






    @Override
    public Optional<Fish> fishSearch(String fishname) {

        Optional<Fish> fish = fishRepository.findByName(fishname);
        if(fish.isPresent()){
            FishDto fishDto = FishMapper.FM.toDto(fish.get());
        }
        return fish;

    }

    @Override
    public boolean checkFishWeight(String fishname, float weight) {
        Optional<Fish> fish = fishRepository.findByName(fishname);
        if(fish.isPresent()){

            FishDto fishDto = FishMapper.FM.toDto(fish.get());
            if(fishDto.averageWeight > weight ){
                return false;
            }else {
                return true;
            }
        }
        return false;
    }

    @Override
    public List<Fish> FetchFish() {
        return fishRepository.findAll();
    }



    @Override
    public Optional<Fish> findFishByName(String fishName) {
        return fishRepository.findByName(fishName);
    }

    @Override
    public Fish createFish(FishDto fishDto) {
        Fish fish = FishMapper.FM.toEntity(fishDto);
        return fishRepository.save(fish);
    }

    @Override
    public Fish updateFish(String fishName, FishDto updatedFishDto) {
        Optional<Fish> optionalFish = fishRepository.findByName(fishName);
        if (optionalFish.isPresent()) {
            Fish fishToUpdate = optionalFish.get();
            // Update fish entity with the new data from updatedFishDto
            // (you might need to modify this based on your application's logic)
            fishToUpdate.setName(updatedFishDto.name);
            fishToUpdate.setAverageWeight(updatedFishDto.averageWeight);
            return fishRepository.save(fishToUpdate);
        }
        return null; // Or handle the case when the fish is not found
    }

    @Override
    public void deleteFish(String fishName) {
        fishRepository.deleteById(fishName);
    }
}
