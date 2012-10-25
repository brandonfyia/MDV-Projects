//
//  baseCustomCar.h
//  AOC2_Wk1
//
//  Created by Brandon Sease on 9/26/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface baseCustomCar : NSObject
{
    int customEnum;
}

typedef enum {
    TINT,
    RIMS,
    STEREO
} customEnum;

//Data members for Labor cost per hour, materials, and hours per job

@property int costPerHour;
@property NSArray *materials;
@property float hoursPerJob;
@property NSString *jobDescription;
@property int total;

// initialize
-(id)init;

//calculate total cost per job
-(void)calculateCostPerJob;

@end
