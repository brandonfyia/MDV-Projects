//
//  baseCustomCar.m
//  AOC2_Wk1
//
//  Created by Brandon Sease on 9/26/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "baseCustomCar.h"

@implementation baseCustomCar

//Synthesize creates get and set methods for each property
@synthesize costPerHour, materials, hoursPerJob, jobDescription, total;

//Initialize the base recipe, creating the instance and setting defaults to zero.
-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setCostPerHour:0];
        [self setMaterials:nil];
        [self setHoursPerJob:0];
        [self setJobDescription:nil];
        [self setTotal:0];
    }
    return self;
}

-(void)calculateCostPerJob
{
    //No Calc ATM
    NSLog(@"This job will cost $%i in total.", total);
}

@end
