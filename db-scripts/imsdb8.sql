--CLEAR TABLE BEFORE EXECUTE NEXT LINE
ALTER TABLE IF EXISTS public.ims_users ADD COLUMN activity boolean NOT NULL default true;