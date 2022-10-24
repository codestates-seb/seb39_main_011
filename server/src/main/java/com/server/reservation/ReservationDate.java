package com.server.reservation;

import com.server.camp.service.CampService;
import com.server.reservation.Service.RezService;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Component
public class ReservationDate {

        private final CampService campService;
        private final RezService rezService;
        private String DATE_KEY;
        private String MONTH_KEY;

    public ReservationDate(CampService campService, RezService rezService) {
        this.campService = campService;
        this.rezService = rezService;
    }

    public Map<String, Integer> doSomeThing (Long campId) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime twoMonthLater = now.plusMonths(2);
        Map<String, Integer> capacityMap = new HashMap<>();
        if (campService.findCamp(campId).size() != 0) {
            Integer capacity = campService.findCamp(campId).get(0).getCapacity();


            for (LocalDateTime date = now; date.isBefore(twoMonthLater); date = date.plusDays(1)) {
                int used = rezService.findRezByDate(date);
                String targetDate = MONTH_KEY + date.getMonth() + DATE_KEY + date.getDayOfMonth();
                capacityMap.put(targetDate, capacity - used);
            }
//            System.out.print(capacityMap);
//
//            return capacityMap;
        }
        return capacityMap;
    }
    }
