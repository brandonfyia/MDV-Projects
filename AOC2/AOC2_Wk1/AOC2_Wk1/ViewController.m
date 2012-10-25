//
//  ViewController.m
//  AOC2_Wk1
//
//  Created by Brandon Sease on 9/26/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    self.view.backgroundColor = [UIColor orangeColor];
    
    scrollview.contentSize = CGSizeMake(320.0f, 800.0f);
    
    //Create a custom tint quote and set number of windows
    customTint *fordRanger = (customTint*)[customCarFactory createNewCustomCar:TINT];
    [fordRanger setWindows:3];
    
    if (fordRanger != nil)
    {
        //Create the matierial array
        NSArray *fordRangerMaterials = [[NSArray alloc] initWithObjects:@"a roll of 25% tint film",@"a squirt bottle of water", @"a squeegee", nil];
        [fordRanger setMaterials:fordRangerMaterials];
        
        //Create the job description string
        NSString *fordRangerDescription = @"Cut tint film to size. Wet windows. Apply film. Squeegee out air bubbles.";
        [fordRanger setJobDescription:fordRangerDescription];
        
        //Print
        tintConfirm = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 15.0f, 300.0f, 20.0f)];
        if (tintConfirm != nil)
        {
            tintConfirm.text = @"You've created a custom tint quote!";
            tintConfirm.textAlignment = UITextAlignmentCenter;
            tintConfirm.backgroundColor = [UIColor whiteColor];
            [scrollview addSubview:tintConfirm];
        }
        tintDetails = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 45.0f, 320.0f, 175.0f)];
        if (tintDetails != nil)
        {
            tintDetails.text = [NSString stringWithFormat:@"Job's general description: %@ and would require: %@", fordRanger.jobDescription, fordRanger.materials];
            tintDetails.textAlignment = UITextAlignmentLeft;
            tintDetails.numberOfLines = 0;
            tintDetails.backgroundColor = [UIColor whiteColor];
            [tintDetails sizeToFit];
            [scrollview addSubview:tintDetails];
        }
        //Calculate job cost
        [fordRanger calculateCostPerJob];
        
        tintCost = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 200.0f, 320.0f, 100.0f)];
        if (tintCost != nil)
        {
            tintCost.text = [NSString stringWithFormat:@"The cost for tinting a car with %d windows would be $%d.", fordRanger.windows, fordRanger.total];
            tintCost.textAlignment = UITextAlignmentLeft;
            tintCost.numberOfLines= 0;
            tintCost.backgroundColor = [UIColor whiteColor];
            [tintCost sizeToFit];
            [scrollview addSubview:tintCost];
        }
        
    }
    
    //Create a custom rims quote and set spinners yes or no
    customRims *gmcHummer = (customRims*)[customCarFactory createNewCustomCar:RIMS];
    [gmcHummer setSpinners:YES];
    
    if (gmcHummer != nil)
    {
        //Create the matierial array
        NSArray *gmcHummerMaterials = [[NSArray alloc] initWithObjects:@"4 rims larger than my house", @"lug nuts", @"a floor jack", nil];
        [gmcHummer setMaterials:gmcHummerMaterials];
        
        //Create the job description string
        NSString *gmcHummerDescription = @"Jack up vehicle. Remove old rims and tires. Install new rims and tires.";
        [gmcHummer setJobDescription:gmcHummerDescription];
        
        //Print
        rimsConfirm = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 280.0f, 300.0f, 20.0f)];
        if (rimsConfirm != nil)
        {
            rimsConfirm.text = @"You've created a custom rims quote!";
            rimsConfirm.textAlignment = UITextAlignmentCenter;
            rimsConfirm.backgroundColor = [UIColor whiteColor];
            [scrollview addSubview:rimsConfirm];
        }
        rimsDetails = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 310.0f, 320.0f, 175.0f)];
        if (rimsDetails != nil)
        {
            rimsDetails.text = [NSString stringWithFormat:@"Job's general description: %@ and would require: %@", gmcHummer.jobDescription, gmcHummer.materials];
            rimsDetails.textAlignment = UITextAlignmentLeft;
            rimsDetails.numberOfLines = 0;
            rimsDetails.backgroundColor = [UIColor whiteColor];
            [rimsDetails sizeToFit];
            [scrollview addSubview:rimsDetails];
        }
        //Calculate job cost
        [gmcHummer calculateCostPerJob];
        
        rimsCost = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 465.0f, 320.0f, 100.0f)];
        if (rimsCost != nil)
        {
            rimsCost.text = [NSString stringWithFormat:@"The cost for putting rims on a car %@ spinners would be $%d.", (gmcHummer.spinners?@"with":@"without"), gmcHummer.total];
            rimsCost.textAlignment = UITextAlignmentLeft;
            rimsCost.numberOfLines= 0;
            rimsCost.backgroundColor = [UIColor whiteColor];
            [rimsCost sizeToFit];
            [scrollview addSubview:rimsCost];
        }
        
    }
    
    //Create a custom stereo quote and choose components
    customStereo *scionFRS = (customStereo*)[customCarFactory createNewCustomCar:STEREO];
    [scionFRS setHeadUnit:YES];
    [scionFRS setAmplifiers:2];
    [scionFRS setTweeters:2];
    [scionFRS setMidRange:2];
    [scionFRS setSubWoofers:3];
    
    if (scionFRS != nil)
    {
        //Create the matierial array
        NSArray *scionFRSMaterials = [[NSArray alloc] initWithObjects:@"All components to be installed", @"wiring and connectors", @"custom speaker box", nil];
        [scionFRS setMaterials:scionFRSMaterials];
        
        //Create the job description string
        NSString *scionFRSDescription = @"Remove old components. Run wiring. Install new components";
        [scionFRS setJobDescription:scionFRSDescription];
        
        //Print
        stereoConfirm = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 545.0f, 300.0f, 20.0f)];
        if (stereoConfirm != nil)
        {
            stereoConfirm.text = @"You've created a custom stereo quote!";
            stereoConfirm.textAlignment = UITextAlignmentCenter;
            stereoConfirm.backgroundColor = [UIColor whiteColor];
            [scrollview addSubview:stereoConfirm];
        }
        stereoDetails = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 575.0f, 320.0f, 175.0f)];
        if (stereoDetails != nil)
        {
            stereoDetails.text = [NSString stringWithFormat:@"Job's general description: %@ and would require: %@", scionFRS.jobDescription, scionFRS.materials];
            stereoDetails.textAlignment = UITextAlignmentLeft;
            stereoDetails.numberOfLines = 0;
            stereoDetails.backgroundColor = [UIColor whiteColor];
            [stereoDetails sizeToFit];
            [scrollview addSubview:stereoDetails];
        }
        //Calculate job cost
        [scionFRS calculateCostPerJob];
        
        stereoCost = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 730.0f, 320.0f, 100.0f)];
        if (stereoCost != nil)
        {
            stereoCost.text = [NSString stringWithFormat:@"The cost for putting a stereo in a car with %i components would be $%d.", scionFRS.totalComponents, scionFRS.total];
            stereoCost.textAlignment = UITextAlignmentLeft;
            stereoCost.numberOfLines= 0;
            stereoCost.backgroundColor = [UIColor whiteColor];
            [stereoCost sizeToFit];
            [scrollview addSubview:stereoCost];
        }
    }
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

@end
